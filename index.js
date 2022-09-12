const { Kafka } = require('kafkajs')
const Chance = require('chance')

const chance = new Chance()

const kafka = new Kafka({
    clientId: 'my-producer',
    brokers: ['localhost:9092']
})

const producer = kafka.producer()

const topic = 'animal'
let i =0


const producerMessage = async () =>{
    const value = chance.animal()

    await producer.send({
        topic ,
        messages: [
            { value },
        ],
    })

    i++
    console.log(value)

}

const run = async () => {
    // Producing
    await producer.connect()
    setInterval(producerMessage , 1000)

}
run().catch(console.error)