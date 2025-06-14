
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';

const ThreeDScene = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <Canvas>
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        
        <Box args={[1.5, 1.5, 1.5]}>
          <meshStandardMaterial color={'#61DAFB'} wireframe />
        </Box>

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>
    </div>
  );
};

export default ThreeDScene;
