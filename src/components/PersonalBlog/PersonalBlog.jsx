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
              As we know JavaScript is a single threaded language. But the
              language has some mechanism to run asynchronous code in parallel
              in a non blocking manner with the help of
              <code class="bg-purple-50 p-1 rounded font-bold">
                'Event Loop'.
              </code>
              The code in JavaScript are executed line by line, the functions
              are sent to the Call Stack for execution. Whenever a asynchronous
              function is detected, it is then sent from the Call Stack to the
              corresponding Web APIs to run asynchronously without blocking
              other funtions' execution. After the processing of the
              asynchronous function is done it is forwarded to the Event Queue
              where the
              <code class="bg-purple-50 p-1 rounded font-bold">Event Loop</code>
              constantly looks if there's any function ready for execution, upon
              detection the function is then pushed to the Call Stack to
              complete its execution.
            </p>
          </div>
        </div>

        <div class="mx-3 my-8 py-3 px-4 shadow-sm rounded border">
          <div class="flex items-center">
            <div class="h-8 w-8 bg-purple-300 rounded-full flex justify-center items-center text-purple-800 mr-3">
              4
            </div>
            <p class="text-gray-800 text-lg">
              What does <code>'React'</code> work?
            </p>
          </div>
          <hr class="my-3" />
          <div class="flex items-center">
            <p class="mx-11 text-start leading-loose">
              The
              <code class="bg-purple-50 p-1 rounded font-bold">
                'quizTimer()'
              </code>
              function first checks whether the function's parameter is truthy
              or not. If it is truthy then the
              <code class="bg-purple-50 p-1 rounded font-bold">
                'clearInterval()'
              </code>
              function is called to stop the ongoing timer by passing a value
              <code class="bg-purple-50 p-1 rounded font-bold"> 'timer' </code>
              then the
              <code class="bg-purple-50 p-1 rounded font-bold">
                'quizTimer()'
              </code>
              function returns to stop the execution of code further. If the
              parameter is not truthy then the
              <code class="bg-purple-50 p-1 rounded font-bold"> 'count' </code>
              variable is taken to imitate a clock, where the floor value of
              <code class="bg-purple-50 p-1 rounded font-bold">'count/60'</code>
              is used to calculate minutes for the clock and
              <code class="bg-purple-50 p-1 rounded font-bold">'count%60'</code>
              is used to calculate seconds of the clock and show it in the
              <code class="bg-purple-50 p-1 rounded font-bold"> h1 </code> with
              id
              <code class="bg-purple-50 p-1 rounded font-bold"> 'count' </code>
              then the counter is incremented and if the counter exceeded 60
              then they would check if the counter value is odd of even and show
              color of the clock accordingly, this whole thing keeps repeating
              with one second interval.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersonalBlog;
