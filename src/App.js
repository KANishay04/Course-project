import { MeetingProvider } from "@videosdk.live/react-sdk";
import { useEffect, useState } from "react";
import { MeetingAppProvider } from "./MeetingAppContextDef";
import { MeetingContainer } from "./meeting/MeetingContainer";
import { LeaveScreen } from "./components/screens/LeaveScreen";
import { JoiningScreen } from "./components/screens/JoiningScreen";
import HomeScreen from "./components/screens/HomeScreen";
import AboutScreen from "./components/screens/AboutScreen";
import CoursesScreen from "./components/screens/CoursesScreen";
import TeacherRating from "./components/TeacherRating";
import TeacherDetail from "./components/TeacherDetail";
import Navbar from "./components/Navbar";
import ContactScreen from "./components/screens/ContactScreen"; // Жаңа компонент импорттау
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [token, setToken] = useState("");
  const [meetingId, setMeetingId] = useState("");
  const [participantName, setParticipantName] = useState("");
  const [micOn, setMicOn] = useState(false);
  const [webcamOn, setWebcamOn] = useState(false);
  const [customAudioStream, setCustomAudioStream] = useState(null);
  const [customVideoStream, setCustomVideoStream] = useState(null);
  const [isMeetingStarted, setMeetingStarted] = useState(false);
  const [isMeetingLeft, setIsMeetingLeft] = useState(false);
  const [currentScreen, setCurrentScreen] = useState("home");

  const isMobile = window.matchMedia(
    "only screen and (max-width: 768px)"
  ).matches;

  useEffect(() => {
    if (isMobile) {
      window.onbeforeunload = () => {
        return "Are you sure you want to exit?";
      };
    }
  }, [isMobile]);

  return (
    <Router>
      <div className="app">
        <MeetingAppProvider>
          {/* Navbar */}
          <Navbar
            onHomeClick={() => {
              setCurrentScreen("home");
              setMeetingStarted(false);
            }}
            onAboutClick={() => setCurrentScreen("about")}
            onCoursesClick={() => setCurrentScreen("courses")}
            onContactClick={() => setCurrentScreen("contact")} // Жаңа батырма
          />

          {/* Content */}
          <div className="content">
            {currentScreen === "home" ? (
              <HomeScreen onClickStart={() => setCurrentScreen("joining")} />
            ) : currentScreen === "about" ? (
              <AboutScreen />
            ) : currentScreen === "courses" ? (
              <CoursesScreen />
            ) : currentScreen === "contact" ? ( // ContactScreen-ге бағыттау
              <ContactScreen />
            ) : isMeetingStarted ? (
              <MeetingProvider
                config={{
                  meetingId,
                  micEnabled: micOn,
                  webcamEnabled: webcamOn,
                  name: participantName || "TestUser",
                  multiStream: true,
                  customCameraVideoTrack: customVideoStream,
                  customMicrophoneAudioTrack: customAudioStream,
                }}
                token={token}
                reinitialiseMeetingOnConfigChange={true}
                joinWithoutUserInteraction={true}
              >
                <MeetingContainer
                  onMeetingLeave={() => {
                    setToken("");
                    setMeetingId("");
                    setParticipantName("");
                    setWebcamOn(false);
                    setMicOn(false);
                    setMeetingStarted(false);
                  }}
                  setIsMeetingLeft={setIsMeetingLeft}
                />
              </MeetingProvider>
            ) : isMeetingLeft ? (
              <LeaveScreen setIsMeetingLeft={setIsMeetingLeft} />
            ) : (
              <JoiningScreen
                participantName={participantName}
                setParticipantName={setParticipantName}
                setMeetingId={setMeetingId}
                setToken={setToken}
                micOn={micOn}
                setMicOn={setMicOn}
                webcamOn={webcamOn}
                setWebcamOn={setWebcamOn}
                customAudioStream={customAudioStream}
                setCustomAudioStream={setCustomAudioStream}
                customVideoStream={customVideoStream}
                setCustomVideoStream={setCustomVideoStream}
                onClickStartMeeting={() => {
                  setMeetingStarted(true);
                }}
                startMeeting={isMeetingStarted}
                setIsMeetingLeft={setIsMeetingLeft}
              />
            )}
          </div>
          
        </MeetingAppProvider>
      </div>
    </Router>
  );
}

export default App;
