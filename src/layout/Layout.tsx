import React, { useState } from "react";

import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { Switch } from "../ui/switch";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";

export default function Layout() {
  const [checked, setChecked] = useState(false);
  const [on, setOn] = useState(false);

  return (
    <div className="p-8">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">UI Components — Landing</h1>
        <p className="text-sm text-muted-foreground">A simple gallery of your UI components.</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Controls</CardTitle>
            <CardDescription>Buttons, inputs and toggles</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <Button onClick={() => alert("Button clicked")}>Primary Button</Button>
              <Input placeholder="Type here..." />
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2">
                  <Checkbox checked={checked} onCheckedChange={(v) => setChecked(Boolean(v))} />
                  <span>Check me</span>
                </label>
                <label className="flex items-center gap-2">
                  <span>Toggle</span>
                  <Switch checked={on} onCheckedChange={(v) => setOn(Boolean(v))} />
                </label>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Identity & Badges</CardTitle>
            <CardDescription>Avatar and badge examples</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="/vite.svg" alt="avatar" />
                <AvatarFallback>MV</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2">
                  <strong>Misstress</strong>
                  <Badge>Pro</Badge>
                </div>
                <div className="text-sm text-muted-foreground">Frontend kit</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tabs</CardTitle>
            <CardDescription>Simple tab example</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="tab1">
              <TabsList>
                <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                <TabsTrigger value="tab2">Tab 2</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1">Content for tab 1</TabsContent>
              <TabsContent value="tab2">Content for tab 2</TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Placeholder</CardTitle>
            <CardDescription>Use this area to add more components</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-muted-foreground">Add more UI demos here as needed.</p>
              <Button variant="outline">Outline</Button>
            </div>
          </CardContent>
          <CardFooter />
        </Card>
      </div>
    </div>
  );
}
