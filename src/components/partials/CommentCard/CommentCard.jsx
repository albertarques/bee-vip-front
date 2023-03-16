import React from 'react'
import JuanValdezAvatar from '../../../assets/juanvaldezavatar.png'

export default function CommentCard() {
  return (
    <div className="p-2 flex flex-col gap-6 mb-4 md:flex-row">
      <div className="flex flex-row gap-4">
        <img src={JuanValdezAvatar} className="m-2 object-cover w-auto h-auto border-2 border-blue-700 rounded-full" alt="avatar" />
        <div className="flex flex-col gap-2">
          <h2 className="font-medium font-title text-sm">Juan Valdez</h2>
          <p className="font-sm font-title text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, molestiae?</p>
          <div className="flex flex-row gap-1 text-xs text-yellow-400">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <img src={JuanValdezAvatar} className="m-2 object-cover w-auto h-auto border-2 border-blue-700 rounded-full" alt="avatar" />
        <div className="flex flex-col gap-2">
          <h2 className="font-medium font-title text-sm">Juan Valdez</h2>
          <p className="font-sm font-title text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, molestiae?</p>
          <div className="flex flex-row gap-1 text-xs text-yellow-400">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <img src={JuanValdezAvatar} className="m-2 object-cover w-auto h-auto border-2 border-blue-700 rounded-full" alt="avatar" />
        <div className="flex flex-col gap-2">
          <h2 className="font-medium font-title text-sm">Juan Valdez</h2>
          <p className="font-sm font-title text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, molestiae?</p>
          <div className="flex flex-row gap-1 text-xs text-yellow-400">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
        </div>
      </div>
    </div>
  )
}
