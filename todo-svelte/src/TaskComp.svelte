<script lang="ts">
  import EditTask from './EditTask.svelte';

  export let taskDetails: {
    id: number, 
    task: string
  }[];

  let showEditTask = false;

  function handleToggleEdit(event) {
    const id = event.detail.id;
    const task = event.detail.task;
    const show = event.detail.show;

    showEditTask = show;
    for(let taskObj of taskDetails) {
      if(taskObj.id == id) {
        taskObj.task = task;
        break;
      }
    }
    
  }

  function deleteTask(id: number) {
    console.log(id);
    fetch(
      `http://localhost:3000/task/${id}`,
      {
        method: 'DELETE'
      }
    )
    .then(result => {
      return result.json();
    })
    .then(result => {
      console.log(result);
      taskDetails = taskDetails.filter(task => task.id !== id);
    })
    .catch(err => console.log(err));
  }

  function updateTask(id:number, task:string) {
    showEditTask = true;
  }
</script>

{#each taskDetails as task}
  {#if !showEditTask}
    <div class="task card">
      {#if task.id}
        <p class="task__details">
          {task.task}
        </p>
        <div class="btn-group">
          <button 
          class="btn btn-upd" 
          on:click={() => updateTask(task.id, task.task)}
          >
           Update
          </button>
          <button class="btn btn-del" 
          on:click={() => deleteTask(task.id)}
          >
            Delete
          </button>
        </div>
      {/if}
    </div>
  {:else}
    <EditTask id={task.id} task={task.task} on:hide-edit={handleToggleEdit}/>
  {/if}
{/each}

<style>
  .task {
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
  }

  .task__details {
    max-width: 50%;
  }

  .btn-del {
    border: 1px solid red;
    background-color: white;
    color: red;
  }

  .btn-del:hover {
    border: 1px solid white;
    background-color: red;
    color: white;
  }

  .btn-group {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-left: .5rem;
    margin-right: .5rem;
    width: 50%;
  }

  @media only screen and (max-width: 500px) {
		.task {
			display: flex;
			flex-direction: column;
			width: 100%;
		}
    
    .task__details {
      margin-bottom: 1rem;
      max-width: 100%;
      width: 100%;
    }

    .btn-group {
      display: block;
      width: 100%;
      margin: 0;
    }

    .btn {
      display: block;
      width: 100%;
    }
    
    .btn-upd {
      margin-bottom: 1rem;
    }
	}
</style>