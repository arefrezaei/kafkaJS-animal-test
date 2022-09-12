const { Kafka } = require('kafkajs')


const kafka = new Kafka({
    clientId: 'my-producer',
    brokers: ['localhost:9092']
})


const consumer = kafka.consumer({ groupId: 'test-group' })

const topic = 'animal'
const array = []
let arrayLast = []

    module.exports
        {
            function handle(array) {
                arrayLast = array
                console.log("catch")
            }
        }

const consume  = async () => {
    // Consuming
    await consumer.connect()
    await consumer.subscribe({ topic , fromBeginning: true})

    await consumer.run({
        eachMessage: async ({topic, partition, message}) => {

            array.push(message.value.toString())
            handle(array)
        },

    })
}
consume ().catch(console.error)

