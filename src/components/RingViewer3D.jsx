import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, Environment, ContactShadows, Float, Html } from "@react-three/drei";

// MESH FOR THE BAND
function RingBand({ color }) {
    return (
        <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[2.2, 0.15, 16, 100]} />
            <meshStandardMaterial
                color={color}
                metalness={1}
                roughness={0.15}
                envMapIntensity={1}
            />
        </mesh>
    );
}

// MESH FOR THE DIAMOND
function Diamond() {
    return (
        <mesh position={[0, 2.35, 0]}>
            <octahedronGeometry args={[0.6, 0]} />
            <meshPhysicalMaterial
                color="white"
                transmission={1}
                opacity={1}
                metalness={0}
                roughness={0}
                ior={2.4}
                thickness={2}
                specularIntensity={1}
                envMapIntensity={1.5}
            />
        </mesh>
    );
}

function Experience({ metalColor }) {
    // Map string colors to hex code
    const getHexColor = (c) => {
        if (c.includes("White") || c.includes("Platinum")) return "#d4d4d8"; // Silver
        if (c.includes("Rose")) return "#e0bfb8"; // Rose Gold
        return "#FFD700"; // Yellow Gold
    };

    return (
        <>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <group dispose={null}>
                    <RingBand color={getHexColor(metalColor)} />
                    <Diamond />
                </group>
            </Float>
            <ContactShadows position={[0, -3.5, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />
            <Environment preset="city" />
        </>
    );
}

export default function RingViewer3D({ metalColor }) {
    return (
        <Canvas shadows camera={{ position: [0, 0, 8], fov: 50 }}>
            <Suspense fallback={<Html><div style={{ color: "black", fontWeight: "bold" }}>Loading Ring...</div></Html>}>
                <Stage environment="city" intensity={0.6}>
                    <Experience metalColor={metalColor} />
                </Stage>
            </Suspense>
            <OrbitControls enableZoom={true} enablePan={false} minPolarAngle={0} maxPolarAngle={Math.PI / 1.5} autoRotate autoRotateSpeed={4} />
        </Canvas>
    );
}
