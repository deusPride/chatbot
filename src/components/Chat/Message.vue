<template >
<div class="message">
<h5>{{ sender }}</h5>
<p>{{ content }}</p>
<span>{{ date }}</span>
</div>
</template>
<script>
export default {
    name:'ChatMessage',
    props: [
        'text', // Content of the message
        'author', // Author of the message
        'dark' // Background 
    ],
    data(){
        return{
            sender: 'Bot',
            content: 'test'
        }
    }
}
</script>

<style scoped>
.message{
    margin-top: 3px;
    padding: 5px;
    color: black;
    bottom: 2px;
    position: relative;
    border: 1px solid #111f2c;
    max-width: 50%;

}
.message.bot{
    background-color: beige;
    left: 5px;
}
.message.user{
background-color: rgb(53, 219, 95);
    right: 5px;
}
p,h5{
    margin: 2px ;
}
</style>