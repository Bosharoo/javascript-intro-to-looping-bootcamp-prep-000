function forLoop(arr)
{
  for (let i = 0; i < 25; i++)
  {
    console.log(arr.length);
    arr.push(`"I am ${i} strange loop${i === 1 ? '' : 's'}."`);
  }
}