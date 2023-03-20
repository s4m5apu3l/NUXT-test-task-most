<template>
  <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
      <!--Form fields-->
      <div class="col-span-3 mb-4">
          <label class="label">First Name</label>
          <Field name="firstName" :class="{ 'is-invalid': errors.firstName }" type="text" class="input" />
          <div class="invalid-feedback">{{ errors.firstName }}</div>
      </div>
      <div class="col-span-3  mb-4">
          <label for="LastName" class="label">
              Last Name
          </label>
          <Field name="lastName" type="text" id="LastName" class="input" />
          <div class="invalid-feedback">{{ errors.lastName }}</div>
      </div>
      <div class="col-span-6  mb-4">
          <label for="Email" class="label">
              Email
          </label>
          <Field name="email" type="email" id="Email" class="input" />
          <div class="invalid-feedback">{{ errors.email }}</div>

      </div>
      <div class="col-span-6  mb-4">
          <label for="Phone" class="label">
              Phone
          </label>
          <Field name="phone" type="tel" id="Phone" class="input" />
          <div class="invalid-feedback">{{ errors.phone }}</div>

      </div>

      <fieldset class="col-span-6 mb-4">
          <div class="form-group form-check">
              <Field name="acceptTerms" type="checkbox" id="acceptTerms" value="true" class="form-check-input"
                  :class="{ 'is-invalid': errors.acceptTerms }" />
              <label for="acceptTerms" class="ml-2 text-sm font-medium text-gray-700">Accept Terms &
                  Conditions</label>
              <div class="invalid-feedback">{{ errors.acceptTerms }}</div>
          </div>
      </fieldset>

      <!--Form submit button-->

      <div class="col-span-6">

          <button type="submit"
              class="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg">Pay
              now</button>
      </div>
  </Form>

</template>

<script setup>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  firstName: Yup.string()
      .required('First Name is required'),
  lastName: Yup.string()
      .required('Last Name is required'),
  email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
  phone: Yup.string()
      .required('Phone is required'),
  acceptTerms: Yup.string()
      .required('Please accept Ts & C')
});

function onSubmit(values) {
  // display form values on success
  alert('barda!! :-)\n\n' + JSON.stringify(values, null, 4));
}
</script>