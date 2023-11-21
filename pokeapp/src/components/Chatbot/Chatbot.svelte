<script>
  import Icon from '@iconify/svelte';
	import { afterUpdate } from 'svelte';
  export let show;
  let messages = [{
        'text': "Hello, I'm Ash Ketchum from Pallet Town. What's up?",
        'writtenBy': 'bot'
      },]
  
  let text=""

  let element;

  let isLoading = false;

  $: messages
  $: isLoading

  const sendMessage = async () => {
    if (text === "") return;

    isLoading = true;

    messages = [...messages, {
      text,
      "writtenBy": 'user'
    }]

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'message': text,
      })
    }

    text=""
    const res = await fetch("http://localhost:3000", options);
    const data = await res.json();
  
    messages = [...messages, 
      {
        'text': data.text,
        'writtenBy': 'bot'
      }
    ]
    console.log(messages)
    isLoading = false;
    
  }

  afterUpdate(() => {
		if(messages) scrollToBottom(element);
  });

  
  const scrollToBottom = async (node) => {
    if (node) {
      node.scroll({ top: node.scrollHeight, behavior: 'smooth' });
    }
  }; 


</script>

<style>
  * {
    padding: 0;
    margin: 0;
  }

  .chatbot {
    position: fixed;
    bottom: 40px;
    right: 20px;
    z-index: 4;
    background: white;
    width: 350px;
    border-radius: 10px;
    box-shadow: 0 0 12px 0;
  
  }

  .chatbot-header {
    background: rgb(103, 138, 212);
    display: flex;
    justify-content: center;
    padding: 10px;
  }

  h2 {
    color: white;
  }

  .chatbox {
    height: 500px;
    overflow-y: auto;
    padding: 10px;
   
  }

  .chat {
    display: flex;
    align-items: center;
    
  }

  .bot-response {
    margin-bottom: 10px;
    
  }

  .bot-response p {
    background: #f2f2f2;
    color: black;
    
  }

  .user-response {
    justify-content: flex-end;
    margin-bottom: 10px;
  }


  p {
    background: rgb(103, 138, 212);
    border-radius: 10px;
    color: white;
    padding: 10px;
    max-width: 75%;
  }

  .bot-pfp {
    border: 1px solid black;
    border-radius: 50%;
    object-fit: contain;
    width: 30px;
    height: 30px;
    margin-right:5px;
  }

  .user-input {
    bottom: 0;
    width: 100%;
    border-top: 1px solid grey;
    display: flex;
  }

  .user-input > button {
    flex: 1;
  }

  .send-btn {
    background-color: white;
    border: none;
    padding: 0;
  }

  .send-btn:hover {
    background-color: rgb(103, 138, 212) ;
  }

  textarea {
    border: none;
    font-size: 15px;
    outline: none;
    resize: none;
    padding: 5px 10px;
  }

  .loading span {
    width: 15px;
    height: 15px;
    margin: 0 2px;
    background-color: black;
    border-radius: 50%;
    display: inline-block;
    animation-name: dots;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out
  }

  .loading span:nth-child(2) {
    animation-delay: 0.4s
  }
  .loading span:nth-child(3) {
    animation-delay: 0.8s
  }

  @keyframes dots {
    50% {
      opacity: 0;
      transform: scale(0.7) translateY(10px);
    }
  }

</style>


{#if show}
<div class="chatbot">
  <div class="chatbot-header">
    <h2>Ash Ketchum</h2>
  </div>
  <div class="chatbox" bind:this={element}>
    {#each messages as message}
    {#if message.writtenBy === 'bot'}
    <div class="chat bot-response">   
      <img class="bot-pfp" src="/images/ash.png" alt="">
      <p class="bot-message">{message.text}</p>
    </div>
    {:else}
    <div class="chat user-response">
      <p class="user-message" style="text-align: end">{message.text}</p>
    </div>
    {/if}
    {/each}
    {#if isLoading}
    <div class="loading">
      <span></span>
      <span></span>
      <span></span>
    </div>
    {/if}
    <div id="anchor"></div>
  </div>
  <form class="user-input" on:submit|preventDefault={sendMessage}>
    <textarea placeholder="Enter a message..." bind:value={text} cols="30" rows="3" required></textarea>
    <button class="send-btn">
      <Icon icon="tabler:send" height="24px"/>
    </button>
  </form>
</div>
{/if}