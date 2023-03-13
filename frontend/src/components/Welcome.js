import React from 'react';

const Welcome = () => {
  return (
    <div class="container-fluid bg-dark text-light p-5">
      <div class="container bg-dark p-5">
        <h1 class="display-4">Images Gallery</h1>
        <p class="lead">
          This is a simple application that retrieves photos using Unsplash API.
          Inorder to start, enter any search term in the input field.
        </p>
        <a
          class="btn btn-primary btn-lg"
          href="https://unsplash.com"
          role="button"
        >
          Learn more
        </a>
      </div>
    </div>
  );
};

export default Welcome;
