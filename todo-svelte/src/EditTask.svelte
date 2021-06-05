<script lang="ts">
  export let task:string;
  export let id:number;

  function saveTask() {
    fetch(
      'http://localhost:3000/task',
      {
        method: "PUT",
        body: JSON.stringify({
          id: id,
          task: task
        }),
        headers: {
          'Content-Type' : 'application/json'
        }
      }
    )
    .then(result => result.json())
    .then(result => {
      console.log(result);
    })
    .catch(err => console.log(err));
  }
</script>

<section class="card">
	<h3>Make Changes and save</h3>

	<form class="form" on:submit|preventDefault={saveTask}>
		<div class="form__input-group">
			<label for="task"> Enter task:- </label>
			<textarea 
			type="text" 
			name="task" 
			id="task" 
			placeholder="e.g-complete one of hundred incomplete courses"
			rows="3"
			bind:value={task}
			></textarea>
		</div>
		<button type="submit" class="btn"> Save Changes </button>
	</form>

</section>

<style>
  section {
	  margin: 2rem auto;
	  padding: 2rem;
    background-color: hsl(270, 50%, 98%);
	}

	h3 {
		width: 100%;
		text-align: center;
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

	@media only screen and (max-width: 500px) {

		section {
			width: 100%;
		}
	}
</style>