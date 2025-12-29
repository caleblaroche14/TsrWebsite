// Netlify Function: submit-email
// Receives POST { email, name, token } and forwards to Netlify Forms (target site)
// Expects environment variables (set in Netlify site settings):
//   TARGET_URL - the base URL of the site (e.g. https://tsrwebsite.netlify.app/)
//   FORM_NAME - the Netlify form name (e.g. tsr-email-list)
//   FUNCTION_SECRET - optional secret token for basic protection

exports.handler = async (event, context) => {
  // Handle CORS preflight
  const CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  try {
    if (event.httpMethod === 'OPTIONS') {
      return { statusCode: 204, headers: CORS_HEADERS, body: '' };
    }

    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 200,
        headers: CORS_HEADERS,
        body: JSON.stringify({ ok: true, message: 'Submit-email function. POST to submit.' })
      };
    }

    const contentType = event.headers['content-type'] || event.headers['Content-Type'] || '';
    let data = {};

    if (contentType.includes('application/json')) {
      data = JSON.parse(event.body || '{}');
    } else {
      // parse x-www-form-urlencoded
      const params = new URLSearchParams(event.body || '');
      for (const [k, v] of params.entries()) data[k] = v;
    }

    const email = (data.email || '').toString().trim();
    const name = (data.name || '').toString().trim();
    const token = (data.token || '').toString();

    const EXPECTED = process.env.FUNCTION_SECRET || process.env.NETLIFY_FUNCTION_SECRET || '';
    if (EXPECTED && token !== EXPECTED) {
      return { statusCode: 403, headers: CORS_HEADERS, body: JSON.stringify({ ok: false, error: 'Invalid token' }) };
    }

    if (!email) {
      return { statusCode: 400, headers: CORS_HEADERS, body: JSON.stringify({ ok: false, error: 'Missing email' }) };
    }

    const target = (process.env.TARGET_URL || process.env.NETLIFY_TARGET_URL || '').replace(/\/$/, '') + '/';
    const formName = process.env.FORM_NAME || process.env.NETLIFY_FORM_NAME || '';

    if (!target || !formName) {
      return { statusCode: 500, body: JSON.stringify({ ok: false, error: 'Server not configured (TARGET_URL or FORM_NAME missing)' }) };
    }

    // Submit to Netlify form by posting to site root
    const form = new URLSearchParams();
    form.append('form-name', formName);
    form.append('email', email);
    if (name) form.append('name', name);

    // Send request to target site (Netlify will register the form submission)
    const res = await fetch(target, { method: 'POST', body: form, redirect: 'manual' });

    // If Netlify returns 200-399 treat as success (some setups may redirect)
    if (res.status >= 200 && res.status < 400) {
      return { statusCode: 200, headers: CORS_HEADERS, body: JSON.stringify({ ok: true, message: 'Submitted' }) };
    }

    const text = await res.text().catch(() => '');
    return { statusCode: res.status || 502, headers: CORS_HEADERS, body: JSON.stringify({ ok: false, error: 'Submission failed', detail: text.slice(0, 200) }) };

  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ ok: false, error: err.message }) };
  }
};