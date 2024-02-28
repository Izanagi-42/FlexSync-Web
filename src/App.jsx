// Import Pages
import Diet from "./Components/Diet";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Signup from "./Components/Signup";
import Workout from "./Components/Workout";
import WorkoutForm from "./Components/WorkoutForm";
import Legs from "./Components/Workout-Components/Legs";
import MealPlan from "./Components/Mealplan";
import Abs from "./Components/Workout-Components/Abs";
import Arms from "./Components/Workout-Components/Arms";
import Back from "./Components/Workout-Components/Back";
import Chest from "./Components/Workout-Components/Chest";
import HollowHold from "./Components/Abs-Workout-Components/HollowHold";
import LegRaise from "./Components/Abs-Workout-Components/LegRaise";
import Plank from "./Components/Abs-Workout-Components/Plank";
import ReverseCrunch from "./Components/Abs-Workout-Components/ReverseCrunch";
import BicepsCurl from "./Components/Arms-Workout-Components/BicepsCurl";
import HammerCurl from "./Components/Arms-Workout-Components/HammerCurl";
import OverheadPress from "./Components/Arms-Workout-Components/OverheadPres";
import Pushup from "./Components/Arms-Workout-Components/Pushup";


// Import Component
import Navbar from "./Components/Navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/diet">
          <Diet />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/workout">
          <Workout />
        </Route>
        <Route exact path="/workoutform">
          <WorkoutForm />
        </Route>
        <Route exact path="/workout/Legs">
          <Legs />
        </Route>
        <Route exact path="/mealplan">
          <MealPlan />
        </Route>
        <Route exact path="/workout/abs">
          <Abs />
        </Route>
        <Route exact path="/workout/arms">
          <Arms />
        </Route>
        <Route exact path="/workout/back">
          <Back />
        </Route>
        <Route exact path="/workout/chest">
          <Chest />
        </Route>
        <Route exact path="/workout/abs/hollowhold">
          <HollowHold />
        </Route>
        <Route exact path="/workout/abs/legraise">
          <LegRaise />
        </Route>
        <Route exact path="/workout/abs/plank">
          <Plank />
        </Route>
        <Route exact path="/workout/abs/reversecrunch">
          <ReverseCrunch />
        </Route>
        <Route exact path="/workout/abs/bicepcurl">
          <BicepsCurl />
        </Route>
        <Route exact path="/workout/abs/hammercurl">
          <HammerCurl />
        </Route>
        <Route exact path="/workout/abs/overheadpress">
          <OverheadPress />
        </Route>
        <Route exact path="/workout/abs/pushup">
          <Pushup />
        </Route>
       
      </Switch>

    </Router>
  );
}

export default App;
