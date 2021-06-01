let seconds = 100;
const animation = ['\r|', '\r/', '\r-', '\r\\', '\r|'];
for (let i = 0; i < animation.length; i++) {
  setTimeout(() => {
    process.stdout.write(animation[i]);
    if (i + 1 === animation.length)
      process.stdout.write('\n');
  }, seconds);
  seconds += 100;
}