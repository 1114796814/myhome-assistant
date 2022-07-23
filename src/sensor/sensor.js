const min = 25
const max = 30

const serverIp = '101.132.164.244'
const serverPort = 1883
const url = `mqtt://${serverIp}:${serverPort}`

const topic = "mqtt_temp_topic"

const interval = 1000

import FastNoiseLite from "fastnoise-lite"
let noise = new FastNoiseLite()
noise.SetNoiseType(FastNoiseLite.NoiseType.OpenSimplex2)
noise.SetSeed(Math.floor(Math.random() * 65536))

import mqtt from 'mqtt'

const client = mqtt.connect(url)

let x = Math.floor(Math.random() * 10000)

client.on('connect', function () {
    setInterval(function () {
        let message = (((max + min) / 2 + (max - min) / 2 * noise.GetNoise(x++,1,1)).toFixed(2)).toString()
        client.publish(topic, message)
        console.log(`topic:\x1B[36m${topic}\x1B[39m message:\x1B[36m${message}\x1B[39m`)
    }, interval)
})