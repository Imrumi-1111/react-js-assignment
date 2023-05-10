import styles from './scrollbox.module.css'
import Card from '../atom/card'

export default function Scrollbox(){
    const userOne = {
        image :"./image/RAJU.webp",
        name : "Raju",
        place : "Mmubai",
        profession : "Engineer",
        experience : "3 yrs of Exp."


    }
    const userTwo = {
        image : './image/shyam.jpg',
        name : "Ghanshyam Tiwari",
        place : "Gurgaon",
        profession : "Banker",
        experience : "2 yrs of Exp.",
    }

    const userThree={
        image : "./image/baburao.jpg",
        name : "Baburao Ganpatrao",
        place : "Mumbai",
        profession : "Business",
        experience : "15 yrs of Exp."
}

    const userFour={
        image : "./image/anjali.jpg",
        name : "Anjali",
        place : "Mumbai",
        profession : "Student",
        experience : "0 yr of Exp."
}

    const userFive={
        image : "./image/kachraseth.jpg",
        name : "Kachra Seth",
        place : "Mumbai",
        profession : "Businessman",
        experience : "12 yrs of Exp."
}
    const userSix={
        image : "./image/nanjibhai.jpg",
        name : "Nanji Bhai",
        place : "Mumbai",
        profession : "Businessman",
        experience : "8 yrs of Exp."

    }

    const userSeven={
        image : "./image/totlatiwari.jpg",
        name : "Totla Tiwari",
        place : "Mumbai",
        profession : "Businessman",
        experience : "16 yrs of Exp."

    }
    const userEight={
        image : "./image/anuradha.jpg",
        name : "Anuradha",
        place : "Mumbai",
        profession : "Banker",
        experience : "3 yrs of Exp."

    }
    const userNine={
        image : "./image/munnabhai.jpg",
        name : "Munna Bhai",
        place : "Mumbai",
        profession : "Businessman",
        experience : "7 yrs of Exp."

    }

    const userTen={
        image : "./image/pappu.jpg",
        name : "Pappu",
        place : "Mumbai",
        profession : "Businessman",
        experience : "5 yrs of Exp."
    }

    return(
        <div className={styles.scroll}> 

            <Card
            props={userOne}
            />

            <Card
            props={userTwo}
            />

            <Card
            props={userThree}
            />

            <Card
            props={userFour}
            />

            <Card
            props={userFive}
            />

            <Card
            props={userSix}
            />

            <Card
            props={userSeven}
            />

            <Card
            props={userEight}
            />

            <Card
            props={userNine}
            />

            <Card
            props={userTen}
            />

        </div>
    )
}