import cat from './GettyImages-678870071-7c3e8e7fc4c94654bac8defba2744b3c.jpg'; 
import styles from './Msg.module.css';

type Props= {msg:string, title:string, };

function Msg(p:Props):JSX.Element {
const{msg,title}= p;


    let res:string;
    if(p.title==='hello'){
        res="";
    }else{
        res=p.title + " " + p.msg;
    }
    return (
        <div>
           {/* <h1>{p.title} Hallo {p.msg} !!!!</h1> */}
           <h1>{res}</h1> 
<img className={styles.cat} src={cat} alt='cat'/>
        </div>
    );
}
export default Msg;