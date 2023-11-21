<script>
  import Icon from '@iconify/svelte';
  export let show;
  let messages = [{
        'text': "Salut sdfikrpgjkertoh ijktroijhoirtyjhorytjhoitjyhoit  jyhoijrthyojertojrtoh jrothjoirtjhorjthoijrthojrtoihjrotihjroith ",
        'writtenBy': 'bot'
      },
      {
        'text': "God I suck",
        'writtenBy': 'user'
      }]
  
  let text=""

  const sendMessage = async () => {
    if (text === "") return;

    messages = [...messages, {
      text,
      "writtenBy": 'user'
    }]
  }

  const handleClick = (e) => {
    sendMessage(text)
  }
  

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
  }

  .bot-pfp {
    border: 1px solid black;
    border-radius: 50%;
    object-fit: contain;
    width: 30px;
    height: 30px;
    margin-right:10px;
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

</style>


{#if show}
<div class="chatbot">
  <div class="chatbot-header">
    <h2>Ash Ketchum</h2>
  </div>
  <div class="chatbox">
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
  </div>
  <form class="user-input" on:submit|preventDefault={sendMessage}>
    <textarea placeholder="Enter a message..." bind:value={text} cols="30" rows="3"></textarea>
    <button class="send-btn">
      <Icon icon="tabler:send" height="24px"/>
    </button>
  </form>
</div>
{/if}