import styles from '../styles/Figure.module.css';
import { toast } from 'react-toastify';

export default function Votes({id, votes}) {

    let score = votes.reduce((a, b) => a + b, 0) / votes.length;

    //Send the vote to server
    const sendVote = async (vote) => {

        let response = await fetch(`https://insta.heby.nu/vote.php?id=${id}&vote=${vote}`);
        let data = await response.json();

        if(data.success) {
            toast("Thank you for your vote!")
        } else {
            toast("Something went wrong, please try again!")
        }
    };

    return (

        <div className={styles.vote}>
            {[1, 2, 3, 4, 5].map((i) => (
                <img key={i} src={'/star' + (score >= i ? 1 : 0) + ".png"} alt="Star" onClick={() => sendVote(i)}/>
            ))}
        </div>

    );
}

