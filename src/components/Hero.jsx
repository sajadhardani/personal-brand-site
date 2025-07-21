import React from "react";

import { Suspense } from "react";
import styled from "styled-components"
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Sphere } from "@react-three/drei";
import { MeshDistortMaterial } from "@react-three/drei";
import { ReactThreeFiber } from "@react-three/fiber";

// import { extend } from "@react-three/fiber";



const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    

    width: 100%;
` ;

const Container = styled.div`
height: 100%;
scroll-snap-align: center;
width: 100%;
max-width: 1400px;
display: flex;
justify-content: space-between;

@media only screen and (max-width: 890px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
}
`;

const Left =styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    direction: rtl;
    text-align: right;

    @media only screen and (max-width: 890px) {
        flex: 1;
        align-items: center;
        text-align: center;
        
    }
`;
const Title = styled.h1`
    font-size: 54px;

     @media only screen and (max-width:890px) {
      text-align: center;  
    }
`;

const WhatWeDo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

`;

const Line = styled.img`
    height: 5px;
`; 

const Subtitle = styled.h2`
    color: #da4ea2;
    
`;

const Desc = styled.p`
    font-size: 24px;
    color: lightgray;
     @media only screen and (max-width: 890px) {
        padding: 20px;
        text-align: center;
    }
`;

const Button = styled.button`
    background-color: #da4ea2;
    color: white;
    font-weight: 500;
    width: 100px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

const Right = styled.div`
    flex: 3;
    position: relative;
    @media only screen and (max-width: 890px) {
        flex: 1;
        width: 100%;
    }
`;

const Img = styled.img`
    width: 800px;
    height: 600px;
    object-fit: contain;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: animate 2s infinite ease alternate;
     @media only screen and (max-width:890px) {
        width: 300px;
        height: 300px;
        
    }
    
    @keyframes animate {
        to{
            transform: translateY(20px);
        }
        
    }

`;

const Hero = () => {
    return(
      <Section>
        <Navbar />
        <Container>

        <Left>
        <Title>  سجاد هردانی برنامه نویس</Title>
        <WhatWeDo>
        <Subtitle>
            کاری که ما انجام میدهیم
        </Subtitle>

        </WhatWeDo>

        <Desc>
ما میتوانیم        </Desc>

        <Button>بیشتر بدانید</Button>

        </Left>

        <Right>
            <Canvas>
                <Suspense fallback={null}>
                    <OrbitControls  enableZoom={false}/>
                    <ambientLight intensity={1}/>
                    <directionalLight position={[3,2,1]} />
                    <Sphere args={[1,100,200]} scale={2.4}>  
                    <MeshDistortMaterial 
                    color="#3d1c56"
                     attach="material" 
                     distort={0.5}
                      speed={2} />
                      </Sphere>
                </Suspense>
            </Canvas>
            <Img src="./img/moonman.png" />
        </Right>

        </Container>


      </Section>
        
        
    );
}

export default Hero

/* <Section>
            {/* <Navbar/>
            <Container>
                <Left/>
                <Title>
                    فکر ساختن
                </Title>
                <Subtitle >
                    کاری که ما انجام میدهیم
                </Subtitle>
                <Desc>
                    ما از اینجا تجربیات دیجیتالی لذت بخش و انسان مح.ر لذت میبریم
                </Desc>
                <WhatWeDo />
                <Button>بیشتر بدانید</Button>
                <Left >
                <Right>
                    <Canvas>
                        <Suspense fallback={null}/>
                        <OrbitControls enableZoom={false}/>
                        <ambientLight position={[3,2,1]}/>
                        <directionalLight position={[3, 2, 1]} />
                        <Sphere
                         args={[1,100,200]} scale={2.4} > 
                            <MeshDistortMaterial color="#3d1c56" attach="material"
                            distort={0.5}
                         speed={2}
                            />
                        </Sphere>
                    </Canvas>
                  </Right>
                  
                </Left>
              </Container>
        </Section> */