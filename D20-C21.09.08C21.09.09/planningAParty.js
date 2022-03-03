/*Jim and Pam are inviting friends for a party. But, they want to invite only those friends who have helped them in any way. So, they have made two arrays, indicating the number of people they have taken help from. Each person, has been assigned a unique ID, in the form of a number.

Both, Jim and Pam make their separate invite listAandBbased on the number of people, they have taken help from. Find out if the lists created by the two of them are same or not.

Note: A person might have helped them multiple times, and obviously would be invited only once */
function partyPlanning(N, PamID, M, JimID) {

    var ob1 = {};


    for (var i = 0; i < N; i++) {
        if (ob1[PamID[i]] === undefined) {
            ob1[PamID[i]] = 1;
        }
        else {
            ob1[PamID[i]] = 1;
        }
    }

    for (let i = 0; i < M; i++) {
        if (ob1[JimID[i]] === undefined) {
            console.log("No")
            return;
        }

    }


    console.log("Yes")
}
