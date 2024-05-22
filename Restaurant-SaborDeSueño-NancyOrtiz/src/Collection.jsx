import { collection,getDoc,getFirestore } from "firebase/firestore"


function Collection() {

    const db= getFirestore();

    const itemCollection= collection(db,"items");

    getDocs(itemCollection).then(snapshot=>{
        snapshot.docs.map(docu=>console.log(docu.data()))
    })

    return(
        <div>Collection</div>
    )
}

export default Collection