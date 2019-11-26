package com.fly.basic;

public class Hotel 
{	
	Chef chef;
	public Hotel(Chef chef)
	{
		super();
		this.chef = chef;
	}
	
	public void print()
	{
		System.out.println(chef.cook());
	}
}
