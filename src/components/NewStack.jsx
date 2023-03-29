import { useState } from "react";

function NewStack({ onAddPost }) {
    const [stack, setEnteredStack] = useState("");
    const [exp, setEnteredExp] = useState("");

    function techChangeHandler(event) {
        setEnteredStack(event.target.value);
    }
    function expChangeHandler(event) {
        setEnteredExp(event.target.value);
    }
    function submitHandler($event) {
        $event.preventDefault();
        const postData = {
            stack,
            exp,
        };
        console.log("onsubmitt", postData);
        onAddPost(postData);
    }

    function cancelHandel() {
        setEnteredStack("");
        setEnteredExp("");
    }
    return (
        <>
            <p>Add new stack:</p>
            <form onSubmit={submitHandler}>
                <p>
                    <label htmlFor="tech"> Tech:</label>
                    <input
                        type="text"
                        name="Tech"
                        id="tech"
                        onChange={techChangeHandler}
                    />
                </p>
                <p>
                    <label htmlFor="exp"> Exp:</label>
                    <input
                        type="text"
                        name="Exp"
                        id="exp"
                        onChange={expChangeHandler}
                    />
                </p>
                <button onClick={cancelHandel} type="button">
                    {" "}
                    cancel
                </button>
                <button> Add</button>
            </form>
        </>
    );
}

export default NewStack;
