<template>
    
    <h1>The following demonstrates v-if and v-else further.</h1>
   
    <template v-if="Math.random() > 0.5">
        <p>Now you see me.</p>
        <p>You see this too.</p>
        <p>But I bet you don't see the template element.</p>
    </template>
    <template v-else>
        <p>Now you don't &#128546;</p>
    </template>
  
</template>

