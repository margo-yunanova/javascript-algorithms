function bingo(ticket, win){
  const counter = ticket.reduce((sum, [str, num]) => str.includes(String.fromCharCode(num)) ? ++sum : sum, 0);
  
  return counter >= win ? 'Winner!' : 'Loser!';
}
