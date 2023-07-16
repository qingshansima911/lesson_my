<template>
  <Header title="圈子" />

  <div class="nav">
    <ul class="nav-content">
      <li class="nav-item" @click="goLook(item.imgUrl)" v-for="item in navList" :key="item.categoryId">
        <span>{{ item.name }}</span>
      </li>
    </ul>
  </div>


  <canvas ref="canvasRef"></canvas>

  <Footer />
</template>

<script setup>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

//全景图
import * as THREE from 'three'
import { onMounted, ref } from 'vue';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import useBackgroundStore from '@/store/background.js'
import { watch } from 'vue';

const { state, changeLoadUrl } = useBackgroundStore()
const canvasRef = ref(null)
const navList =
  [
    {
      name: '五区',
      imgUrl: 'https://ts1.cn.mm.bing.net/th/id/R-C.678dafd7d29a872dab0f5b7e0fea91db?rik=MqrrKThUh68hPg&riu=http%3a%2f%2fimg1.yiwugo.com%2fi004%2fpic3d%2f2021%2f06%2f23%2f934a75ea5c9123d380870e87ffb92b10.jpg%3fx-oss-process%3dimage%2fcrop&ehk=dcJEI5rdHGQHnHweTuixKy2t2icHJVKBgH29ZkOf6Tk%3d&risl=&pid=ImgRaw&r=0',
      categoryId: 1
    }, {
      name: '四区',
      imgUrl: 'https://ts1.cn.mm.bing.net/th/id/R-C.390a8add930bfadc033d5285a1d56a7a?rik=SknE0aZptLl0Bg&riu=http%3a%2f%2fimg1.yiwugo.com%2fi004%2fpic3d%2f2021%2f06%2f22%2f78f853b0c27dc3f16792c76450eb58c9.jpg%3fx-oss-process%3dimage%2fcrop&ehk=N%2bhU%2frsqluPI2hVid3crp8qoB4XqGuLJlHDH%2fCzK2mc%3d&risl=&pid=ImgRaw&r=0',
      categoryId: 2
    }, {
      name: '三区',
      imgUrl: 'https://ts1.cn.mm.bing.net/th/id/R-C.c2d82aefe213a5e88a8184cd16e12ff6?rik=078Jisz5cnsVTw&riu=http%3a%2f%2fimg1.yiwugo.com%2fi004%2fpic3d%2f2021%2f06%2f25%2f1ae8b80db6f463cfe30ab7c55415d09f.jpg%3fx-oss-process%3dimage%2fcrop&ehk=BaHg2lv7tVh19vDxPrjrdeB2Yno5wSOby99EW6Hy8wo%3d&risl=&pid=ImgRaw&r=0',
      categoryId: 3
    }
  ]


const goLook = (url) => {
  changeLoadUrl(url)
}

onMounted(() => {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.set(0, 0, 30)
  const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.value, antialias: true })
  //镜头控制器
  const control = new OrbitControls(camera, renderer.domElement)
  control.addEventListener('change', () => {
    renderer.render(scene, camera)
  })

  //灯光
  const light = new THREE.AmbientLight(0xffffff, 0x333333, 1)
  scene.add(light)
  //物体 房间

  let cubeTextureLoader = new THREE.TextureLoader()
  watch(() => state.loadUrl, (newVal) => {
    cubeTextureLoader.load(`${newVal}`, (texture) => {
      const crt = new THREE.WebGLCubeRenderTarget(texture.image.height)
      crt.fromEquirectangularTexture(renderer, texture)  //把全景图转换为纹理格式
      scene.background = crt.texture
    })
  })
  cubeTextureLoader.load(state.loadUrl, (texture) => {
    const crt = new THREE.WebGLCubeRenderTarget(texture.image.height)
    crt.fromEquirectangularTexture(renderer, texture)  //把全景图转换为纹理格式
    scene.background = crt.texture
  })

  //渲染
  renderer.setClearColor(0xcccccc)
  renderer.setSize(renderer.domElement.clientWidth, renderer.domElement.clientHeight)
  renderer.render(scene, camera)
})

</script>

<style lang="less" scoped>
canvas {
  width: 100vw;
  height: 100vh;
}

.nav-content {
  width: 100%;
  height: 50px;
  display: flex;
  overflow-x: auto;
  background: #f0d7bd;
  justify-content: space-between;

  .nav-item {
    width: 100px;
    text-align: center;
    padding: 8px 20px;
    text-align: center;
    line-height: 35px;
    font-size: 15px;
    color: #858585;
  }
}
</style>