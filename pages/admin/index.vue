<template>
  <section>
    <div class="pb-5">
      <h1 class=""></h1>
    </div>

    <div>
      <!-- User table -->
      <table class="w-full border-collapse">
        <thead>
          <tr>
            <th
              class="py-2 px-4 bg-gray-100 font-bold uppercase text-sm text-gray-600 border border-gray-300"
            >
              ID
            </th>
            <th
              class="py-2 px-4 bg-gray-100 font-bold uppercase text-sm text-gray-600 border border-gray-300"
            >
              Name
            </th>
            <th
              class="py-2 px-4 bg-gray-100 font-bold uppercase text-sm text-gray-600 border border-gray-300"
            >
              Email
            </th>
            <th
              class="py-2 px-4 bg-gray-100 font-bold uppercase text-sm text-gray-600 border border-gray-300"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="user in users"
            :key="user.id"
            class="border-b border-gray-200 hover:bg-gray-100"
          >
            <td class="py-2 px-4 border border-gray-300">{{ user.id }}</td>
            <td class="py-2 px-4 border border-gray-300">
              {{ user.firstName }}
            </td>
            <td class="py-2 px-4 border border-gray-300">{{ user.email }}</td>
            <td
              class="py-2 px-4 border border-gray-300 flex items-center gap-3"
            >
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                @click="editUser(user)"
              >
                Edit
              </button>
              <button
                class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                @click="deleteUserBtn(user.id)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Add/Edit User form -->
      <form
        v-if="showForm"
        class="mt-4 fixed bottom-0 bg-slate-100 w-full left-0 p-6"
        @submit.prevent="submitForm"
      >
        <div class="flex flex-col mb-2">
          <label class="text-gray-700 font-bold mb-1" for="name">Name:</label>
          <input
            type="text"
            v-model="form.firstName"
            id="firstName"
            name="firstName"
            class="py-2 px-3 border rounded-lg shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
            placeholder="Name"
          />
        </div>
        <div class="flex flex-col mb-2">
          <label class="text-gray-700 font-bold mb-1" for="email">Email:</label>
          <input
            type="email"
            v-model="form.email"
            id="email"
            name="email"
            class="py-2 px-3 border rounded-lg shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
            placeholder="Email"
          />
        </div>
        <div class="flex justify-between items-center mt-4">
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {{ form.id ? "Update" : "Add" }} User
          </button>
          <button
            type="button"
            class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            @click="cancelForm"
          >
            Cancel
          </button>
        </div>
      </form>

      <!-- Add User button -->
      <button
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
        @click="showAddForm"
      >
        Add User
      </button>
    </div>
  </section>
</template>

<script setup>
import { usersStore } from "~~/stores/usersStore";
import { storeToRefs } from "pinia";

const storeUsers = usersStore();
const showForm = ref(false);

const { users } = storeToRefs(storeUsers);

const { fetchUsers, addUserFetch, deleteUser, updateUserFetch } = storeUsers;
await fetchUsers();

const form = reactive({
  id: null,
  firstName: "",
  email: "",
});

const editUser = (user) => {
  form.id = user.id;
  form.firstName = user.firstName;
  form.email = user.email;
  showForm.value = true;
};

const showAddForm = () => {
  // form.id = Math.floor(Math.random() * 1000);
  // form.id = '',
  form.firstName = "";
  form.email = "";
  showForm.value = true;

};

const addUser = async () => {
  await addUserFetch(form);
  cancelForm();
};

const updateUser = async () => {
  await updateUserFetch(form.id, form);
  cancelForm();
};

const deleteUserBtn = async (id) => {
  const deletedUser = await deleteUser(id);
  if (deletedUser) {
    // Handle success
  } else {
    // Handle error
  }
};

const cancelForm = () => {
  // form.id = null;
  form.firstName = "";
  form.email = "";
  showForm.value = false;

};

const submitForm = () => {
  if (form.id) {
    updateUser();
    // console.log('from update user', form.id)
  } else {
    addUser();
  }
};

definePageMeta({
  middleware: "auth",
  // or middleware: 'auth'
});
</script>

<style lang="scss" scoped></style>
