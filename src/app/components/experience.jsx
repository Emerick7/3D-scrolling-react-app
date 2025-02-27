import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Office } from "./office";

export function Experience() {
    return(
        <>
            <ambientLight intensity={1}/>
            <OrbitControls enableZoom={false}/>
            <ScrollControls pages={3} damping={0.25}>
                <Office/>
            </ScrollControls>
        </>
    )
}