import React from "react";

const PersonalBlog = () => {
  return (
    <div className="mt-16">
      <h3 className="lg:text-4xl font-bold">My Blogs</h3>
      <section class="" id="quesAnsContainer">
        <div class="mx-3 my-8 py-3 px-4 shadow-sm rounded-lg border">
          <div class="flex items-center">
            <div class="h-8 w-8 bg-purple-300 rounded-full flex justify-center items-center text-purple-800 mr-3">
              1
            </div>
            <p class="text-gray-800 text-lg">
              What is the difference between <code>'props'</code> and
              <code>'state'</code>?
            </p>
          </div>
          <hr class="my-3" />
          <div class="flex items-center">
            <p class="mx-11 text-start leading-loose">
              The difference is:
              <code class="bg-purple-50 p-1 rounded font-bold">'props'</code>
              are a way of communicating between Components, that holds data,
              which are passed down by the parent Component and can be used by
              child Components.
              <code class="bg-purple-50 p-1 rounded font-bold">'Props'</code>
              can only be used by child Components and not by parent. This is
              sort of like function parameters, for example when we call a
              function that accepts parameter, we pass some values or datas
              which are then used by the function to do some work,
              <code class="bg-purple-50 p-1 rounded font-bold">'props'</code>
              are of similar concept too.
              <br />
              Whereas,{" "}
              <code class="bg-purple-50 p-1 rounded font-bold">'state'</code> is
              a object that is subjective to change inside a Component. It can
              be anything that change as a result of some events or user
              interaction. This is something confined within the perimeter of
              the Component and upon change the Component re-renders it.
            </p>
          </div>
        </div>

        <div class="mx-3 my-8 py-3 px-4 shadow-sm rounded-lg border">
          <div class="flex items-center">
            <div class="h-8 w-8 bg-purple-300 rounded-full flex justify-center items-center text-purple-800 mr-3">
              2
            </div>
            <p class="text-gray-800 text-lg">
              How does <code>'useState()'</code> work?
            </p>
          </div>
          <hr class="my-3" />
          <div class="flex items-center">
            <p class="mx-11 text-start">
              If we want to bring any change to any element or anything react
              does not allow you to do that, even if it is an event handle. For
              the change to take place in the DOM, react uses things called
              hooks and
              <code class="bg-purple-50 p-1 rounded font-bold">
                'useState()'
              </code>
              is one of them. This hook takes an initial value of a state and
              returns a state's current value and a function by which you can
              update the state's value which can be any sort of data.{" "}
              <code class="bg-purple-50 p-1 rounded font-bold">
                'useState()'
              </code>{" "}
              keeps track of the state and upon any change that it detects it
              will re-render any element that is associated with it.
            </p>
          </div>
        </div>

        <div class="mx-3 my-8 py-3 px-4 shadow-sm rounded border">
          <div class="flex items-center">
            <div class="h-8 w-8 bg-purple-300 rounded-full flex justify-center items-center text-purple-800 mr-3">
              3
            </div>
            <p class="text-gray-800 text-lg">
              Purpose of <code>'useEffect()'</code> other than fetching data.
            </p>
          </div>
          <hr class="my-3" />
          <div class="flex items-center">
            <p class="mx-11 text-start leading-loose">
              <code class="bg-purple-50 p-1 rounded font-bold">
                'useEffect()'
              </code>{" "}
              is a side effect of react which is used to reach outside of the
              react components in order to do something, like fetching an API
              data. It is also a hook of react which accepts a function and a
              dependency. This hook runs on every render unless you pass a
              dependency value and it will render whenever the dependency value
              changes. So, it can be used on timers, validating inputs, trigger
              animation, trigger any change in the DOM.
            </p>
          </div>
        </div>

        <div class="mx-3 my-8 py-3 px-4 shadow-sm rounded border">
          <div class="flex items-center">
            <div class="h-8 w-8 bg-purple-300 rounded-full flex justify-center items-center text-purple-800 mr-3">
              4
            </div>
            <p class="text-gray-800 text-lg">
              How does <code>'React'</code> work?
            </p>
          </div>
          <hr class="my-3" />
          <div class="flex items-center">
            <p class="mx-11 text-start leading-loose">
              <code class="bg-purple-50 p-1 rounded font-bold">'React'</code>{" "}
              uses components like functions. React takes all the elements and
              creates a JavaScript representation of the entire DOM know as
              vitual DOM and assigns unique key to each element to keep track,
              whenever there's any change React uses "diffing" algorithm to
              pinpoint which element has undergo change matching the vitual DOM
              with the actual DOM using the keys and updates that element only
              and re rendering it with re rendering the whole DOM.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersonalBlog;
