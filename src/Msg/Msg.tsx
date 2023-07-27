import cat from './GettyImages-678870071-7c3e8e7fc4c94654bac8defba2744b3c.jpg'; 
import styles from './Msg.module.css';
function Msg():JSX.Element {
    return (
        <div>
        {   <h1>Hallo!!!!</h1> }
<img className={styles.cat} src={cat} alt='cat'/>
        </div>
    );
}
export default Msg;