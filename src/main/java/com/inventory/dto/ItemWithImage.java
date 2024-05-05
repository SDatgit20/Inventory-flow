package com.inventory.dto;


import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
public class ItemWithImage {
    private Item item;
    private byte[] imageData;
}