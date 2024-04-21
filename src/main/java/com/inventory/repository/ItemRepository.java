package com.inventory.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.inventory.dto.Item;

public interface ItemRepository extends JpaRepository<Item, Integer> {
	
//	custom finder method
//	find item by name
	public List<Item> findAllByNameContainingIgnoreCase (String name);
}