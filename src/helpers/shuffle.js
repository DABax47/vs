/**
 **
 *Shuffle will handle the reshuffling of the roster array
 *** @PARAMS--- roster Array
 *@returns --- the newly shuffled array
 ***
 */
const shuffle = (arr) => {
  arr.sort(() => Math.random() - 0.5);
  return arr;
};
export default shuffle;
