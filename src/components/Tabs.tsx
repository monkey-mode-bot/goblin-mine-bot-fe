import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Spacer,
  Tab,
  Tabs
} from "@nextui-org/react";
import { GalleryIcon, MusicIcon, VideoIcon } from "../icon/Icon";
import NotificationSettings from "./Notification";
import User from "./User";

export default function TabsComponent() {
  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options" color="primary" variant="bordered">
        <Tab
          key="photos"
          title={
            <div className="flex items-center space-x-2">
              <GalleryIcon />
              <span>Photos</span>
            </div>
          }
        >
          <NotificationSettings />
        </Tab>
        <Tab
          key="music"
          title={
            <div className="flex items-center space-x-2">
              <MusicIcon />
              <span>Music</span>
            </div>
          }
        >
          <User />
        </Tab>
        <Tab
          key="videos"
          title={
            <div className="flex items-center space-x-2">
              <VideoIcon />
              <span>Videos</span>
            </div>
          }
        >
          <Card>
            <CardHeader>
              <h3>TON Space Payment</h3>
            </CardHeader>
            <CardBody>
              <h5>
                Click the button below to initiate your payment with TON Space.
              </h5>
              <Spacer y={1.5} />
              <Button
                size="lg"
                color="primary"
                // onClick={() => tonConnectUI.openModal()}
              >
                Pay with TON Space
              </Button>
              {/* <User /> */}
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
