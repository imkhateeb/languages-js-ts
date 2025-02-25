console.log("Global this", this);

function thisFunction1(){
    console.log("This inside thisFunction1", this)
}

const thisFunction2 = () => {
    console.log("This inside thisFunction2", this)
}

const obj = {
    name: "Khateeb",
    rollNo: "2022UG3006",
    fn1: function (){
        console.log("This inside normal fn1 object1", this)
    },
    normalFn: function (){
        const name = "Shubh";
        (() => {
            console.log("This inside arrow fn2 object2", this)
        })()
    },
    fn2: () => {
        console.log("This inside arrow fn2 object3", this)
    }

}

thisFunction1();
thisFunction2();
obj.fn1();
obj.fn2();
obj.normalFn();