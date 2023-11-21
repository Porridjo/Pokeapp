<script>
  import Icon from '@iconify/svelte';

  let messages = []

  let text=""

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
</script>

<style>
  .container {
    min-height: 95vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .panel {
    height: 700px;
    width: 800px;
    background-color: white;
    border-radius: 20px;
    border: 2px black solid;
    overflow-y: scroll;
  }

  .inner {
    padding: 20px;
    display: flex;
    flex-direction: column;
    
  }

  .user-message {
    background-color: #3881F4;
    padding: 10px;
    border: 1px solid black;
    border-radius: 15px;
    width: fit-content;
    align-self: flex-end;
    margin-bottom: 10px;
    color: white;
    
  }
  .bot-response {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
  }
  .bot-pfp {
    border: 1px solid black;
    border-radius: 50%;
    object-fit: contain;
    width: 50px;
    height: 50px;
    margin-right:10px;
  }

  .bot-message {
    background-color: #EFF0F0;
    padding: 10px;
    border: 1px solid black;
    border-radius: 15px;
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



<div class="container">
  <h1>Chat with Ash Ketchum</h1>
  <div class="panel">
    <div class="messages">
      <div class="inner">
        {#each messages as message}
        {#if message.writtenBy === 'bot'}
        <div class="bot-response">   
          <img class="bot-pfp" src="/images/ash.png" alt="">
          <div class="bot-message">{message.text}</div>
        </div>
        {:else}
        <div class="user-message" style="text-align: end">{message.text}</div>
        {/if}
        {/each}
        {#if isLoading}
          <div class="loading">
            <span></span>
            <span></span>
            <span></span>
          </div>
        {/if}
      </div>
    </div>
  </div>
  
  <form on:submit|preventDefault={sendMessage}>
    <input type="text" bind:value={text}>
    <button>Send</button>
    <Icon icon="tabler:send" />
  </form>
</div>
