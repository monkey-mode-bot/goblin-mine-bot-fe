import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Spacer,
  Switch
} from "@nextui-org/react";
import { useState } from "react";

// Define the type for notification settings
interface NotificationSettingsState {
  pauseAll: boolean;
  followers: boolean;
  likes: boolean;
  comments: boolean;
  mentions: boolean;
  messages: boolean;
  friendRequests: boolean;
}

const NotificationSettings: React.FC = () => {
  const defaultSettings: NotificationSettingsState = {
    pauseAll: false,
    followers: false,
    likes: false,
    comments: false,
    mentions: false,
    messages: false,
    friendRequests: false
  };

  const [settings, setSettings] = useState<NotificationSettingsState>({
    ...defaultSettings
  });

  // Reset to default settings
  const resetToDefault = () => {
    setSettings({ ...defaultSettings });
  };

  // Save changes (placeholder function)
  const saveChanges = () => {
    console.log("Saved settings:", settings);
    // Add save logic, such as making an API call
  };

  // Toggle a specific setting
  const handleToggle = (key: keyof NotificationSettingsState) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [key]: !prevSettings[key]
    }));
  };

  return (
    <Card fullWidth>
      <CardHeader>
        <text>Notification Settings</text>
        <text>Manage your notification preferences</text>
      </CardHeader>
      <CardBody>
        <div>
          <text>Pause all</text>
          <Switch
            isSelected={settings.pauseAll}
            onChange={() => handleToggle("pauseAll")}
          />
        </div>
        <Spacer y={0.5} />
        <div>
          <text>Followers</text>
          <Switch
            isSelected={settings.followers}
            onChange={() => handleToggle("followers")}
          />
        </div>
        <Spacer y={0.5} />
        <div>
          <text>Likes</text>
          <Switch
            isSelected={settings.likes}
            onChange={() => handleToggle("likes")}
          />
        </div>
        <Spacer y={0.5} />
        <div>
          <text>Comments</text>
          <Switch
            isSelected={settings.comments}
            onChange={() => handleToggle("comments")}
          />
        </div>
        <Spacer y={0.5} />
        <div>
          <text>Mentions</text>
          <Switch
            isSelected={settings.mentions}
            onChange={() => handleToggle("mentions")}
          />
        </div>
        <Spacer y={0.5} />
        <div>
          <text>Messages</text>
          <Switch
            isSelected={settings.messages}
            onChange={() => handleToggle("messages")}
          />
        </div>
      </CardBody>

      <Spacer y={0.5} />
      <div>
        <text>Friend Requests</text>
        <Switch
          isSelected={settings.friendRequests}
          onChange={() => handleToggle("friendRequests")}
        />
      </div>
      <Spacer y={1} />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button onClick={resetToDefault} color="warning">
          Reset to Default
        </Button>
        <Button onClick={saveChanges}>Save Changes</Button>
      </div>
    </Card>
  );
};

export default NotificationSettings;
