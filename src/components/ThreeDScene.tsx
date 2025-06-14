
import { Canvas } from '@react-three/fiber';
import { OrbitControls, TorusKnot } from '@react-three/drei';

const ThreeDScene = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <Canvas>
        <ambientLight intensity={1.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
        <pointLight position={[-10, -10, -10]} intensity={1.5} />
        
        <TorusKnot args={[1.5, 0.5, 128, 16]}>
          <meshStandardMaterial color={'#61DAFB'} wireframe />
        </TorusKnot>

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>
    </div>
  );
};

export default ThreeDScene;
