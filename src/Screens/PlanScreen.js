import React from 'react'
import "./planScreen.css";
// import { QuerySnapshot } from 'firebase/firestore';

function PlanScreen() {
    // const [products, setProducts] = useState([]);

    // useEffect() =>{
    //     db.collection("products").where('active', "==", true).get().then(QuerySnapshot =>{
    //         const products ={};
    //         QuerySnapshot.forEach(async productDoc => {
    //             products[productDoc.id] = productDoc.data;
    //             const priceSnap = await productDoc.ref.collection.('prices').get();
    //             priceSnap.docs.forEach(doc =>{
    //                 products[productDoc.id].prices = {
    //                     priceId: price.id
    //                 }
    //             })
                
    //         });
    //     })
    // }
  return (
    <div className='planScreen'>
        <div className="planScreen__plan">
            <div className="planScreen__info">
                <h5>Premium
                    <br/> <span className='span'>4K + HDR</span>
                </h5>
               
                <button>Subscribe</button>
            </div>
            <div className="planScreen__info">
                <h5>Basic<br/><span className='span'>720p</span> </h5>
                
                <button>Subscribe</button>
            </div>
            <div className="planScreen__info">
                <h5>Standard
                    <br/><span className='span'>1080p</span>
                </h5>
              
                <button>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default PlanScreen