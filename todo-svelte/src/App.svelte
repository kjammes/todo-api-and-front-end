<script lang="ts">
	import TaskComp from './TaskComp.svelte';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';

	let task: string = "";
	let tasks: {
    id: number, 
    task: string
  }[] = [];
	
	fetch(
		'http://localhost:3000/tasks'
	)
		.then(result => {
			return result.json();
		})
		.then(result => {
			tasks = result;
		})
		.catch(err => console.log(err));

	function saveTask() {
		if(!task) {
			alert("Please enter some task to complete");
			return;
		}
		
		console.log("Inside saveTask");
		

		if( !tasks.length ){
			console.log("Inside if not tasks");
			
			tasks = [{id:1, task: task}];
		}
		else {
			console.log("If tasks is not empty");
			
			tasks.push(
				{id: tasks[tasks.length-1].id+1, task: task}
			);
			tasks = tasks;
		}
		task = "";

		fetch('http://localhost:3000/task',
			{
        method: 'POST',
        body: JSON.stringify({task: tasks[tasks.length-1].task}),
        headers: {
          'Content-Type' : 'application/json'
        }
      }
		)
		.then(result => {
			return result.json();
		})
		.then(result => {
			console.log(result);
		})
		.catch(err => console.log(err));
	}
</script>

<Header title="Task Tracker"/>

<main class="card">
	<h1>Add a task to complete</h1>

	<form class="form" on:submit|preventDefault={saveTask}>
		<div class="form__input-group">
			<label for="task"> Enter task:- </label>
			<textarea 
			type="text" 
			name="task" 
			id="task" 
			placeholder="e.g-complete one of hundred incomplete courses"
			rows="5"
			bind:value={task}
			></textarea>
		</div>
		<button type="submit" class="btn"> Add Task </button>
	</form>

</main>
<TaskComp taskDetails={tasks}/>

<Footer/>

<style>
	main {
	  margin: 2rem auto;
	  padding: 2rem;
	}

	h1 {
		width: 100%;
		text-align: center;
		font-size: 1.5rem;
		font-weight: normal;
	}

	textarea {
		padding: 5px;
		resize: none;
	}

	.form {
	  margin: 1rem;
	  padding: 2rem;
	  border: 1px solid lightgrey;
	}

	@media only screen and (max-width: 700px) {
	  .form {
			margin: 0;
			padding: 2rem 1rem;
		}
	}

	@media only screen and (max-width: 550px) {
		h1 {
			font-size: 2rem;
		}
	}

	@media only screen and (max-width: 500px) {
		h1 {
			font-size: 1.9rem;
		}

		main {
			width: 100%;
		}
	}
</style>