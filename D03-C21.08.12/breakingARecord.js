/*You are provided the highest runs,N, ever scored in a cricket match till now, which is current highest record.

You are also given current runs,Mscored by Sachin (Tendulkar) in a today's match.

If Sachin breaks current record in that match, printBroken.
If Sachin could not break that record, printNot Yet.
If Sachin score exactly as current highest record, printWao */

function breakingTheRecord(n, m) {

  if (n < m) {
    console.log("Broken");
  }
    if (n == m) {
    console.log("Wao");
  }
    if (n > m) {
    console.log("Not Yet");
  }
  
}