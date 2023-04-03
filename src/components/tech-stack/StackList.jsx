import NewStack from "../NewStack";
import classes from "./StackList.module.css";
import { useState } from "react";
// import { Stack } from "./Stack";
function StackList() {
    const [isNewStackVisible, setStackVisibility] = useState(true);
    const [stacks, setStacks] = useState([]);

    function addStack(stack) {
        setStacks((existingStack) => [stack, ...existingStack]);
    }
    return (
        <div className={classes.stackList}>
            {isNewStackVisible ? (
                <NewStack onAddPost={addStack}></NewStack>
            ) : null}

            {/* <div className={classes.list}>
                <Stack tech="Angular 2+" exp="3.5 years"></Stack>
                {stacks.map((s) => (
                    <Stack tech={s.stack} exp={s.exp}></Stack>
                ))}
            </div> */}
        </div>
    );
}

export default StackList;
