/*
  Edit Task


***************************

  1. utils/actions.js


***************************

  - redirect('/tasks')
    -> redirect won't works unless the component has 'use client'
    -> another option, setup the editTask in the component directly


***************************

  <input type='hidden' name='id' value={id} />
    -> we need to have this in the form -> so that the action can get the ID 
    -> but we don't want to display the ID here -> use "hidden"

  <input type='text' required defaultValue={content} name='content'/>
    -> defaultValue
    -> required


*/
