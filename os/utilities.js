function PrintLinesInBox(text) {
  const lines = text.replace(/\r/g, '').split('\n');
  const maxWidth = Math.max(...lines.map(line => line.length));

  const top = '+' + '-'.repeat(maxWidth + 2) + '+';
  AddTerminalLine(top);

  lines.forEach(line => {
    const padded = '| ' + line.padEnd(maxWidth, ' ') + ' |';
    AddTerminalLine(padded);
  });

  AddTerminalLine(top);
}