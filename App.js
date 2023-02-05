Const TabItems = Document.QuerySelectorAll('.Tab-Item');
Const TabContentItems = Document.QuerySelectorAll('.Tab-Content-Item');

// Select Tab Content Item
Function SelectItem(E) {
  // Remove All Show And Border Classes
  RemoveBorder();
  RemoveShow();
  // Add Border To Current Tab Item
  This.ClassList.Add('Tab-Border');
  // Grab Content Item From DOM
  Const TabContentItem = Document.QuerySelector(`#${This.Id}-Content`);
  // Add Show Class
  TabContentItem.ClassList.Add('Show');
}

// Remove Bottom Borders From All Tab Items
Function RemoveBorder() {
  TabItems.ForEach(Item => {
    Item.ClassList.Remove('Tab-Border');
  });
}

// Remove Show Class From All Content Items
Function RemoveShow() {
  TabContentItems.ForEach(Item => {
    Item.ClassList.Remove('Show');
  });
}

// Listen For Tab Item Click
TabItems.ForEach(Item => {
  Item.AddEventListener('Click', SelectItem);
});
