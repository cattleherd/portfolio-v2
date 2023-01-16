import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei' //allow importing of glb files
import { useFrame } from '@react-three/fiber'; //react three hook for animation

export function Model(props) {

    const { nodes, materials } = useGLTF("/finished2.glb"); //import 3d model
    
    const headMesh = React.useRef(); //create reference for the head mesh so it can be animated
    const bodyMesh = React.useRef(); //create reference for the body mesh so it can be animated

    //useFrame is a react-three hook that lets you execute code on each frame
    //we will rotate y axis dependant on elapsed time using clock parameter
    useFrame(({ clock })=>{
        const a = clock.getElapsedTime();
        headMesh.current.rotation.y = a;
    });

    useFrame(({ clock })=>{
        const a = clock.getElapsedTime();
        bodyMesh.current.rotation.y = a;
    });

    return (
      <group {...props} dispose={null}>
        <group
          position={[0, 2, 1]}
          rotation={[-0.05, 0, 0]}
          scale={0.3}
        >
          <mesh ref={headMesh} //headmesh rendering, reference added so it can be manipulated
            castShadow
            receiveShadow
            geometry={nodes.FBHead_mesh001.geometry}
            material={materials.FBHead_preview_mat} //head wireframe in blender
          />
          <mesh ref={bodyMesh} //bodymesh rendering, reference added so it can be manipulated
            castShadow
            receiveShadow
            geometry={nodes.FBHead_mesh001_1.geometry}
            material={materials["wire_000000000.001"]} //body wireframe in blender
          />
        </group>
      </group>
    );
}

useGLTF.preload('/finished2.glb')