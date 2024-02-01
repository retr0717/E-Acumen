export const Sort = (list : any) => {

const topMovieCombined = list.slice().sort((a:any, b : any) => {
  // Custom logic to combine all three criteria
  const combinedScoreA = a.vote_count * a.vote_average * a.popularity;
  const combinedScoreB = b.vote_count * b.vote_average * b.popularity;

  return combinedScoreB - combinedScoreA;
});

return topMovieCombined;
}