import type { FC } from "react"
import type { Route } from "../+types/root";
import { NavBar } from "~/components/NavBar";
import PageLayout from "~/components/PageLayout";
import Footer from "~/components/Footer";

`## **Understanding the F1–F19 Fail Items: What Every Learner Driver Should Know**

Sitting your driving test is a big milestone, and it’s completely normal to feel a mix of excitement and nerves. One of the best ways to boost your confidence is to understand exactly what the testing officer is looking for—especially the actions that can lead to an immediate fail. These are known as **F1–F19 fail items**, and they represent serious mistakes that compromise safety.

This guide breaks down each fail item in clear, practical language, helping you prepare for a smooth and successful test day.

---

## 🚫 **F1–F19: Serious Fail Items Explained**

### **F1. Disobeying traffic signs, signals or road markings**
Ignoring stop signs, running a red light, or crossing solid lines shows unsafe decision-making and results in an instant fail.

### **F2. Failing to give way when required**
Give way rules are essential for preventing collisions. Not yielding when you should—at intersections, roundabouts, or merging—creates danger.

### **F3. Colliding with a vehicle, pedestrian or object**
Any collision, no matter how minor, is considered a serious safety breach.

### **F4. Performing an illegal act or manoeuvre**
This includes U-turns where prohibited, unsafe overtaking, or driving in a bus lane.

### **F5. Exceeding the speed limit**
Even a small amount over the limit is enough to fail. Speeding shows poor control and judgement.

### **F6. Performing an action that requires the testing officer’s intervention**
If the officer must grab the wheel, apply the brake, or verbally stop you from danger, the test cannot continue.

### **F7. Causing a dangerous situation**
Any action that puts you, the officer, or other road users at risk falls into this category.

### **F8. Failing to maintain proper control of the vehicle**
Examples include rolling backwards on a hill, stalling repeatedly, or losing control during turns.

### **F9. Failing to exercise due care to avoid an accident**
This covers situations where you should have acted earlier—like braking too late or not reacting to hazards.

### **F10. Failing to give way to an emergency vehicle**
Ambulances, fire trucks, and police vehicles with lights or sirens must always be given priority.

### **F11. Disobeying directions from a person controlling traffic**
Ignoring instructions from road workers, police, or traffic controllers is a serious offence.

### **F12. Frequently not signalling intention**
Indicators are your communication tool. Forgetting to signal repeatedly shows unsafe habits.

### **F13. Refusing to attempt any part of the test**
If you decline to perform a required task—like a hill start or reverse park—the test cannot continue.

### **F14. Repeated or deliberate failure to follow directions**
Not listening to the testing officer or intentionally ignoring instructions results in an immediate fail.

### **F15. Unreasonably obstructing other vehicles or pedestrians**
Driving too slowly, hesitating excessively, or blocking traffic creates unnecessary risk.

### **F16. Receiving external advice or instruction during the test**
No coaching is allowed. If someone tries to guide you from outside the vehicle, the test is invalid.

### **F17. Not parking to the required standard**
Parking must be safe, legal, and within the lines. Excessive correction or unsafe positioning can lead to failure.

### **F18. Failing to maintain a safe following distance**
Tailgating is dangerous. You must leave enough space to stop safely.

### **F19. Frequently not making the required observation checks**
Head checks, mirror checks, and scanning for hazards are essential. Missing these repeatedly shows unsafe awareness.

---

## 📝 **After the Test: What Happens Next**

Once the test is complete, the testing officer will sit with you to discuss your performance. This conversation is designed to help you understand your strengths and areas for improvement.

### **If You Pass**
You’ll be upgrading from your **L licence** to:
- A **Provisional Licence**, or  
- An **Unrestricted Licence** if you already hold a recognised overseas car licence for more than three years.

If you hold another type of licence, you’ll be issued the appropriate class based on your test.

### **If You Don’t Pass**
Don’t worry—many learners need more than one attempt.

You’ll receive:
- An **assessment sheet** showing exactly where things went wrong  
- **General comments** from the testing officer  
- Support from your driving instructor to help you understand the feedback and improve for next time  

Failing is not the end—it’s simply part of the learning journey.

---

## 🚗 **Final Thoughts**

Understanding the F1–F19 fail items helps you approach your driving test with clarity and confidence. These rules aren’t just for the test—they’re essential for safe driving every day. With practice, patience, and the right guidance, you’ll be well on your way to earning your licence and driving independently.

If you’d like, I can help you turn this into a polished webpage section for your driving school site or expand it with examples from real learner scenarios.`

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Exit-L: Understanding the F1–F19 Fail Items." },
    { name: "description", content: "Understanding the F1–F19 Fail Items: What Every Learner Driver Should Know. Exit-L Driving School." },
  ];
}

const FYI: FC = () => {
    return <PageLayout>
        <div className="relative h-[100dvh] w-full bg-[url('./exitl.png')] bg-fixed bg-no-repeat bg-cover dark:text-white">
            <div className="absolute top-0 w-full h-full bg-gray-200/80 dark:bg-gray-900/90 overflow-auto">
                <div className="w-full p-4 flex flex-row justify-center mt-22">
                    <div className="w-full lg:w-[80%] xl:w-[70%] 2xl:w-[60%] flex flex-col">
                        <h1 className=" font-black text-center text-4xl text-shadow-sm text-shadow-gray-500/50">Understanding the F1-F19 Fail Items: What Every Learner Driver Should Know.</h1>
                        <br />
                        <div className="text-justify mb-4">
                            Sitting your driving test is a big milestone, and it's completely normal to feel a mix of excitement and nerves. One of the best ways to boost your confidence is to understand exactly what the testing officer is looking for — especially the actions that can lead to an immediate fail. These are known as <strong>F1-F19 fail items</strong>, and they represent serious mistakes that compromise safety.
                            This guide breaks down each fail item in clear, practical language, helping you prepare for a smooth and successful test day.
                        </div>

                        <hr /><br />
                        <h2 className="m-2 font-extrabold text-3xl">🚫 F1–F19: Serious Fail Items Explained</h2>
                        <div id="FailItemsSection" className="m-2">
                            <details className="m-1" open={true}>
                                <summary className="font-bold text-xl  text-xl text-red-800 dark:text-red-500 underline">F1. Disobeying traffic signs, signals or road markings</summary>
                                <p className="p-2 dark:bg-gray-800 bg-slate-200 rounded">
                                    Ignoring stop signs, running a red light, or crossing solid lines shows unsafe decision-making and results in an instant fail.
                                </p>
                            </details>
                            <details className="m-1" open={true}>
                                <summary className="font-bold text-xl  text-xl text-red-800 dark:text-red-500 underline">F2. Failing to give way when required</summary>
                                <p className="p-2 dark:bg-gray-800 bg-slate-200 rounded">
                                    Give way rules are essential for preventing collisions. Not yielding when you should—at intersections, roundabouts, or merging—creates danger.
                                </p>
                            </details>
                            <details className="m-1" open={true}>
                                <summary className="font-bold text-xl  text-xl text-red-800 dark:text-red-500 underline">F3. Colliding with a vehicle, pedestrian or object</summary>
                                <p className="p-2 dark:bg-gray-800 bg-slate-200 rounded">
                                    Any collision, no matter how minor, is considered a serious safety breach.
                                </p>
                            </details>
                            <details className="m-1" open={true}>
                                <summary className="font-bold text-xl  text-xl text-red-800 dark:text-red-500 underline">F4. Performing an illegal act or manoeuvre</summary>
                                <p className="p-2 dark:bg-gray-800 bg-slate-200 rounded">
                                    This includes U-turns where prohibited, unsafe overtaking, or driving in a bus lane.
                                </p>
                            </details>
                            <details className="m-1" open={true}>
                                <summary className="font-bold text-xl  text-xl text-red-800 dark:text-red-500 underline">F5. Exceeding the speed limit</summary>
                                <p className="p-2 dark:bg-gray-800 bg-slate-200 rounded">
                                    Even a small amount over the limit is enough to fail. Speeding shows poor control and judgement.
                                </p>
                            </details>
                            <details className="m-1" open={true}>
                                <summary className="font-bold text-xl  text-xl text-red-800 dark:text-red-500 underline">F6. Performing an action that requires the testing officer’s intervention</summary>
                                <p className="p-2 dark:bg-gray-800 bg-slate-200 rounded">
                                    If the officer must grab the wheel, apply the brake, or verbally stop you from danger, the test cannot continue.
                                </p>
                            </details>
                            <details className="m-1" open={true}>
                                <summary className="font-bold text-xl  text-xl text-red-800 dark:text-red-500 underline">F7. Causing a dangerous situation</summary>
                                <p className="p-2 dark:bg-gray-800 bg-slate-200 rounded">
                                    Any action that puts you, the officer, or other road users at risk falls into this category.
                                </p>
                            </details>

                            <details className="m-1" open={true}>
                                <summary className="font-bold text-xl  text-xl text-red-800 dark:text-red-500 underline">F8. Failing to maintain proper control of the vehicle</summary>
                                <p className="p-2 dark:bg-gray-800 bg-slate-200 rounded">
                                    Examples include rolling backwards on a hill, stalling repeatedly, or losing control during turns.
                                </p>
                            </details>

                            <details className="m-1" open={true}>
                                <summary className="font-bold  text-xl  text-xl text-red-800 dark:text-red-500 underline">F9. Failing to exercise due care to avoid an accident</summary>
                                <p className="p-2 dark:bg-gray-800 bg-slate-200 rounded">
                                    This covers situations where you should have acted earlier—like braking too late or not reacting to hazards.
                                </p>
                            </details>

                            <details className="m-1" open={true}>
                                <summary className="font-bold  text-xl  text-xl text-red-800 dark:text-red-500 underline">F10. Failing to give way to an emergency vehicle</summary>
                                <p className="p-2 dark:bg-gray-800 bg-slate-200 rounded">
                                    Ambulances, fire trucks, and police vehicles with lights or sirens must always be given priority.
                                </p>
                            </details>

                            <details className="m-1" open={true}>
                                <summary className="font-bold  text-xl  text-xl text-red-800 dark:text-red-500 underline">F11. Disobeying directions from a person controlling traffic</summary>
                                <p className="p-2 dark:bg-gray-800 bg-slate-200 rounded">
                                    Ignoring instructions from road workers, police, or traffic controllers is a serious offence.
                                </p>
                            </details>

                            <details className="m-1" open={true}>
                                <summary className="font-bold  text-xl  text-xl text-red-800 dark:text-red-500 underline">F12. Frequently not signalling intention</summary>
                                <p className="p-2 dark:bg-gray-800 bg-slate-200 rounded">
                                    Indicators are your communication tool. Forgetting to signal repeatedly shows unsafe habits.
                                </p>
                            </details>

                            <details className="m-1" open={true}>
                                <summary className="font-bold  text-xl  text-xl text-red-800 dark:text-red-500 underline">F13. Refusing to attempt any part of the test</summary>
                                <p className="p-2 dark:bg-gray-800 bg-slate-200 rounded">
                                    If you decline to perform a required task—like a hill start or reverse park—the test cannot continue.
                                </p>
                            </details>

                            <details className="m-1" open={true}>
                                <summary className="font-bold  text-xl  text-xl text-red-800 dark:text-red-500 underline">F14. Repeated or deliberate failure to follow directions</summary>
                                <p className="p-2 dark:bg-gray-800 bg-slate-200 rounded">
                                    Not listening to the testing officer or intentionally ignoring instructions results in an immediate fail.
                                </p>
                            </details>

                            <details className="m-1" open={true}>
                                <summary className="font-bold  text-xl  text-xl text-red-800 dark:text-red-500 underline">F15. Unreasonably obstructing other vehicles or pedestrians</summary>
                                <p className="p-2 dark:bg-gray-800 bg-slate-200 rounded">
                                    Driving too slowly, hesitating excessively, or blocking traffic creates unnecessary risk.
                                </p>
                            </details>

                            <details className="m-1" open={true}>
                                <summary className="font-bold  text-xl  text-xl text-red-800 dark:text-red-500 underline">F16. Receiving external advice or instruction during the test</summary>
                                <p className="p-2 dark:bg-gray-800 bg-slate-200 rounded">
                                    No coaching is allowed. If someone tries to guide you from outside the vehicle, the test is invalid.
                                </p>
                            </details>

                            <details className="m-1" open={true}>
                                <summary className="font-bold  text-xl  text-xl text-red-800 dark:text-red-500 underline">F17. Not parking to the required standard</summary>
                                <p className="p-2 dark:bg-gray-800 bg-slate-200 rounded">
                                    Parking must be safe, legal, and within the lines. Excessive correction or unsafe positioning can lead to failure.
                                </p>
                            </details>

                            <details className="m-1" open={true}>
                                <summary className="font-bold  text-xl  text-xl text-red-800 dark:text-red-500 underline">F18. Failing to maintain a safe following distance</summary>
                                <p className="p-2 dark:bg-gray-800 bg-slate-200 rounded">
                                    Tailgating is dangerous. You must leave enough space to stop safely.
                                </p>
                            </details>

                            <details className="m-1" open={true}>
                                <summary className="font-bold  text-xl  text-xl text-red-800 dark:text-red-500 underline">F19. Frequently not making the required observation checks</summary>
                                <p className="p-2 dark:bg-gray-800 bg-slate-200 rounded">
                                    Head checks, mirror checks, and scanning for hazards are essential. Missing these repeatedly shows unsafe awareness.
                                </p>
                            </details>
                        </div>

                        <br /><hr /><br />
                        <h2 className="m-2 font-extrabold text-3xl">📝After the Test: What Happens Next</h2>
                        <div id="AfterTestSection" className="m-4">
                            <div className="text-justify mb-4">
                                Once the test is complete, the testing officer will sit with you to discuss your performance. This conversation is designed to help you understand your strengths and areas for improvement.
                            </div>

                            <div className="m-1">
                                <h3 className="font-bold text-xl text-xl text-green-800 dark:text-green-500">- If You Pass</h3>
                                <div className="p-2 dark:bg-emerald-900 bg-emerald-300 rounded">
                                    <div className="underline">You’ll be upgrading from your <b>L licence</b> to:</div>
                                    <div className="pl-5 p-2">
                                        <ul className="list-disc">
                                            <li>A <b>Provisional Licence</b>, or</li>
                                            <li>An <b>Unrestricted Licence</b> if you already hold a recognised overseas car licence for more than three years.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="m-1">
                                <h3 className="font-bold  text-xl  text-xl text-red-800 dark:text-red-500">- If You Don’t Pass</h3>
                                <div className="p-2 dark:bg-rose-900 bg-rose-300 rounded">
                                    <div className="underline">Don't worry—many learners need more than one attempt.</div>
                                    <div className="pl-5 p-2">
                                        You'll recieve:
                                        <ul className="list-disc">
                                            <li>An <b>assessment sheet</b> showing exactly where things went wrong,</li>
                                            <li><b>General comments</b> from the testing officer,</li>
                                            <li>Support from your driving instructor to help you understand the feedback and improve for next time.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br /><hr /><br />

                        <div className="text-justify mb-4">
                            Understanding the F1-F19 fail items helps you approach your driving test with clarity and confidence. These rules aren't just for the test—they're essential for safe driving every day. With practice, patience, and the right guidance, you'll be well on your way to earning your licence and driving independently.
                            If you'd like, I can help you turn this into a polished webpage section for your driving school site or expand it with examples from real learner scenarios.
                        </div>                      
                    </div>
                </div>
                
                <Footer />
            </div> 
        </div>
    </PageLayout>;
}

export default FYI;